import { ClassDetails } from './types';

export const ClassDescriptions: ClassDetails = {
  muayThai: {
    name: 'Muay Thai',
    description: `The 700 year old National combat sport of Thailand that uses stand up striking along with various techniques such as clinches, Sweeps, Knees & Elbows.`,
    imageName: 'muayThai',
    lookAt: 'top',
    detailInformation: [
      {
        title: 'Muay Thai',
        feature:
          'Learn the proper techniques of punches, kicks, elbows, knees, footwork, blocking and head movement. The Muay Thai classes we offer are the perfect combination of enhancing fitness, learning technique and having fun while developing self-defense skills.',
      },
      {
        feature:
          'Classes on Monday, Wednesday, and Friday from 9-10:30am and 8-9:30pm',
      },
      //   {
      //     feature: 'All skill levels welcome',
      //   },
    ],
  },
  boxing: {
    name: 'Boxing',
    description: `A combat sport that involves a series of punch combinations, footwork and head movement.`,
    imageName: 'boxing',
    lookAt: 'muayThai',
    detailInformation: [
      {
        title: 'Boxing',
        feature:
          'The sweet science of Boxing is a combat sport that utilizes the hands to deliver combinations of punches. Our instructors work with you to create well maintained balance, correct footwork, and proper technique.',
      },
      {
        feature: 'Classes on Tuesday and Thursday from 9-10:30am and 8-9:30pm',
      },
      //   {
      //     feature: 'All skill levels welcome',
      //   },
    ],
  },
  jiuJitsu: {
    name: 'Jiu-Jitsu',
    description: `A grappling based martial art and combat sport system that focuses on controlling a resisting opponent & submission techniques.`,
    imageName: 'jiuJitsu',
    lookAt: 'boxing',
    detailInformation: [
      {
        title: 'Jiu-Jitsu',
        feature:
          'Popularized by the Gracie family, this grappling based martial art provides great mental training and an even better physical workout. This style has proven itself in real world situations time and time again and is widely regarded as the best martial art for self-defense.',
      },
      {
        feature: 'No-Gi, Gi, and Combat classes',
      },
      {
        feature: 'Classes on Monday, Wednesday and Friday from 6:30-8pm',
      },
      //   {
      //     feature: 'All skill levels welcome',
      //   },
    ],
  },
  wrestling: {
    name: 'Wrestling',
    description: `Wrestling is a martial art and combat sport that involves grappling with an opponent and striving to obtain a position of advantage through different throws or techniques, within a given ruleset.`,
    imageName: 'wrestling',
    lookAt: 'jiuJitsu',
    detailInformation: [
      {
        title: 'Wrestling',
        feature:
          'Wrestling is not only widely regarded as the best base for MMA, it is hands down one of the best sports to learn mental toughness, discipline, and work ethic. Our wrestling program instills each of these values and more.',
      },
      {
        feature: 'Classes on Tuesday and Thursday from 6:30-8pm',
      },
      //   {
      //     feature: 'All skill levels welcome',
      //   },
    ],
  },
  kids: {
    name: 'Kids Martial Arts',
    description: `We offer kids classes in Muay Thai, Boxing, Jiu-Jitsu, and Wrestling `,
    imageName: 'kids',
    lookAt: 'wrestling',
    detailInformation: [
      {
        title: 'Kids Martial Arts',
        feature:
          'They will learn how to throw the proper punches, kicks, elbows, knees, jiu-jitsu, and wrestling just like the adults in a safe, positive and supportive environment. Discipline, technique and fun are stressed. We have qualified instructors to ensure your child gets the proper attention and attain their goals.',
      },
      {
        feature: 'Classes on Monday-Friday from 5:30-6:30pm',
      },
      {
        subFeature: 'See Schedule for Specifics',
      },
      //   {
      //     feature: 'All skill levels welcome',
      //   },
    ],
  },
  private: {
    name: 'Private Lessons',
    description: `Learn any of our specialty diciplines in a 1:1 private setting`,
    imageName: 'private',
    lookAt: 'kids',
    detailInformation: [
      {
        title: 'Private Lessons',
        feature:
          'Private lessons are a great way to focus on the finer details of any of our available martial arts or fitness classes. Additionally, private lessons allow you to work one on one with an expert to fine tune your strengths and weaknesses helping you accelerate reaching your personal fitness and martial arts goals.',
      },
      {
        feature: 'Private Lessons available upon request',
      },
      //   {
      //     feature: 'All skill levels welcome',
      //   },
    ],
  },
};
