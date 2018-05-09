import Project from '../models/project';

/**
 * Seed projects to the database
 *
 * @param {object} req - request object
 * @param {object} res - response object
 *
 * @return {string} - Database seeded!
 */
export default function seedProjects(req, res) {
  const projects = [
    {
      title: 'Construction of Borehole',
      description: 'The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem',
      location: 'Ikorodu, Lagos',
      budget: '$50,000.00',
      progress: 20,
      image: '/images/borehole.jpeg',
      status: 'Initiated',
      contractorPicture: [
        { picture: '/images/face.jpeg' },
        { picture: '/images/small-logo.png' }
      ]
    },
    {
      title: 'Renovation of Classrooms',
      description: 'Education remains the only sure way to guarantee the future of the next generation. This project is expected to change the poor educational facilities that have made it difficult for students',
      location: 'Benin City, Edo',
      budget: '$5,000.00',
      progress: 0,
      image: '/images/classroom.gps.image.jpeg',
      status: 'On track to be defaulted',
      contractorPicture: [
        { picture: '/images/pix.jpeg' },
        { picture: '/images/star-bucks.jpeg' },
        { picture: '/images/nvidia.jpeg' }
      ]
    },
    {
      title: 'Rebuilding the Tema Bridge',
      description: 'This project involves the rebuilding of the Tema bridge which was destroyed by erosion in 2014. Contractors submitted bids and went through a competitive series of steps before they were selected',
      location: 'Gold Coast, Ghana',
      budget: '$70,000.00',
      progress: 100,
      image: '/images/bridge.jpeg',
      status: 'Completed',
      contractorPicture: [
        { picture: '/images/kene.png' },
        { picture: '/images/profilepic.jpeg' },
        { picture: '/images/salesforce.png' }
      ]
    },
    {
      title: 'Repair of Eroded Road',
      description: 'This project will involve the repair of the Yenagoa road destroyed due to the impact of erosion. It will be done within the dry season of the year to ensure the work is not interrupted by the rains',
      location: 'Yenagoa, Bayelsa',
      budget: '$5,000.00',
      progress: 2,
      image: '/images/road.jpeg',
      status: 'Defaulted',
      contractorPicture: [
        { picture: '/images/pci-logo.png' },
        { picture: '/images/icon.png' }
      ]
    },
    {
      title: 'Construction of Health Center',
      description: 'This proposed health care facility will providethe much needed health care for the people of this commuity, and is expected to go a long way in solving the infant mortality problem',
      location: 'Jos, Plateau',
      budget: '$55,000.00',
      progress: 0,
      image: '/images/health.jpeg',
      status: 'Not Initiated',
      contractorPicture: [
        { picture: '/images/cti.png' },
        { picture: '/images/amazon.png' },
        { picture: '/images/personel.jpeg' }
      ]
    },
    {
      title: 'Construction of Udala Road',
      description: 'The Udala road links seven commuities and is a major market route for buyers and sellers of farm produce. The project is aimed at making this road motorable to enhance trade and commerce in the area',
      location: 'Mile 2, Nnewi',
      budget: '$15,000.00 ',
      progress: 100,
      image: '/images/road2.jpeg',
      status: 'Completed',
      contractorPicture: [
        { picture: '/images/salesforce.png' },
        { picture: '/images/head.jpeg' }
      ]
    },
    {
      title: 'Construction of Classroom',
      description: 'The Boko Haram scourge led to the destruction of this classroom which has now been fully rebuilt and equipped with state of the art facilities to aid the learning of students',
      location: 'Sambisa, Borno',
      budget: '$80,000.00',
      progress: 100,
      image: '/images/class.jpeg',
      status: 'Completed',
      contractorPicture: [
        { picture: '/images/head.jpeg' },
        { picture: '/images/small-logo.png' },
        { picture: '/images/person.jpeg' }
      ]
    },
    {
      title: 'Construction of Burna Bridge',
      description: 'The Burna Bridge project will link eight communities and aid the inflow of essential goods and services to these areas. It is expected to be completed in the next two months',
      location: 'Minna, Niger',
      budget: '$10,000.00',
      progress: 80,
      image: '/images/brg.jpeg',
      status: 'On track to be completed',
      contractorPicture: [
        { picture: '/images/face.jpeg' },
        { picture: '/images/icon.png' },
      ]
    },
  ];

  projects.map((project) => {
    const newProject = new Project(project);
    return newProject.save();
  });
  
  res.send('Projects seeded successfully');
}
