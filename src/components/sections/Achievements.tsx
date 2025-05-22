import React from 'react';
import { AwardIcon, FileTextIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/slideshow.css';

// Import local images
import azureDataFundamentalsImg from '../../images/Azure data fundamentals.png';
import azureFundamentalsImg from '../../images/azure fundamentals.png';
import dataAnalyticsImg from '../../images/Data Analysis & Decision Making.png';
import cloudComputingImg from '../../images/Cloud Computing.png';
import technicalRoundImg from '../../images/Technical Round.png';
import gfgRankImg from '../../images/gfg rank 2.png';
import schoolMeritImg from '../../images/School Merit Award.png';
import devOp from '../../images/dev ops workshop.png';

export function Achievements() {
  const achievements = [
    {
      title: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
      description: 'Certified knowledge in core data concepts and Microsoft Azure data services.',
      certificate: 'https://drive.google.com/file/d/1sdh43vvAUXD99gUNL4TJ0gtiV56qY056/view?usp=sharing',
      image: azureDataFundamentalsImg,
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      description: 'Earned foundational certification in cloud computing and Azure services from Microsoft.',
      certificate: 'https://drive.google.com/file/d/1R0uMDTaWKT7qlFTurmCTbYhNVIYXhJB0/view?usp=sharing',
      image: azureFundamentalsImg,
    },
    {
      title: 'NPTEL Certification – Data Analytics',
      description: 'Completed NPTEL certification in Data Analytics by IIT.',
      certificate: 'https://drive.google.com/file/d/1E-2zjIVnENo1V_kvLqs8o4Xa60SjurHH/view?usp=sharing',
      image: dataAnalyticsImg,
    },
    {
      title: 'NPTEL Certification – Cloud Computing',
      description: 'Certified by NPTEL for foundational and applied concepts in Cloud Computing.',
      certificate: 'https://drive.google.com/file/d/1sdh43vvAUXD99gUNL4TJ0gtiV56qY056/view?usp=sharing',
      image: cloudComputingImg,
    },
    {
      title: 'DevOps Workshop – 2 Day Hands-on Program',
      description: 'Participated in a practical DevOps workshop covering git, github, AWS EC2 and othertools.',
      certificate: null,
      image: devOp,
    },
    {
      title: '1st Prize – Technical Round (with Prize Money)',
      description: 'Secured 1st place in a technical challenge round among peers; awarded prize money.',
      certificate: null,
      image: technicalRoundImg,
    },
    {
      title: 'Top Ranker – GeeksforGeeks Leaderboard',
      description: 'Ranked #2 in institution-level GeeksforGeeks leaderboard for problem-solving.',
      certificate: 'https://www.geeksforgeeks.org/colleges/sree-venkateswara-college-of-engineering-svce-nellore/students/',
      image: gfgRankImg,
    },
    {
      title: 'APUSMA Merit Certification – Class 10',
      description: 'Received APUSMA national merit award for academic excellence in school.',
      certificate: null,
      image: schoolMeritImg,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 overflow-x-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Achievements
        </h2>
        <div className="cursor-grab">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {achievements.map((achievement, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 overflow-hidden flex items-center justify-center bg-white dark:bg-gray-800">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full mr-3">
                        <AwardIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 h-12 overflow-hidden">
                      {achievement.description}
                    </p>
                    {achievement.certificate && (
                      <a
                        href={achievement.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <FileTextIcon className="h-4 w-4 mr-1" />
                        <span>View Certificate</span>
                      </a>
                    )}
                  </div>
                </div>
                <br />
                <br />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
