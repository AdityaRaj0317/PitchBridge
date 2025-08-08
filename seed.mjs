import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import {
  User,
  Startup,
  InvestorPreference,
  Pitch,
  Meeting,
  Notification,
  Message,
  Rating,
  Comment
} from './Schema.mjs'; // Adjust path if needed

// mongoose.connect('mongodb://localhost:27017/pitchbridge')
//   .then(() => console.log('✅ Connected to MongoDB'))
//   .catch(err => console.log('❌ Connection error:', err));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.log('❌ Connection error:', err));


// async function seedData() {
//   try {
//     const founder = await User.create({
//       name: 'Akshika Gupta',
//       email: 'akshika@example.com',
//       password: 'securepass123',
//       role: 'founder',
//       location: 'Prayagraj',
//       verified: true
//     });

//     const investor = await User.create({
//       name: 'Rohit Mehta',
//       email: 'rohit@example.com',
//       password: 'investpass456',
//       role: 'investor',
//       location: 'Delhi',
//       verified: true
//     });

//     const startup = await Startup.create({
//       founderId: founder._id,
//       startupName: 'PitchBridge',
//       domain: 'Networking',
//       stage: 'MVP',
//       summary: 'A platform to connect startups with investors.',
//       location: 'India',
//       targetRaise: 1000000,
//       equityOffered: 12
//     });

//     await InvestorPreference.create({
//       investorId: investor._id,
//       preferredDomains: ['Networking', 'Tech'],
//       fundingRange: { min: 100000, max: 500000 },
//       locationInterest: ['India'],
//       equityRange: { min: 5, max: 20 }
//     });

//     const pitch = await Pitch.create({
//       startupId: startup._id,
//       investorId: investor._id,
//       message: 'Please review our startup.',
//       status: 'pending'
//     });

//     await Meeting.create({
//       pitchId: pitch._id,
//       scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
//       meetingLink: 'https://zoom.us/meeting',
//       notes: 'Discuss equity structure'
//     });

//     await Notification.create({
//       userId: investor._id,
//       message: 'You received a new pitch from PitchBridge.'
//     });

//     await Message.create({
//       senderId: founder._id,
//       receiverId: investor._id,
//       message: 'Hello! Looking forward to connecting.',
//       type: 'text',
//       pitchId: pitch._id
//     });

//     await Rating.create({
//       ratedBy: investor._id,
//       ratedUserId: founder._id,
//       startupId: startup._id,
//       score: 5,
//       review: 'Promising startup with clear vision.'
//     });

//     await Comment.create({
//       userId: investor._id,
//       targetType: 'startup',
//       targetId: startup._id,
//       comment: 'Looking forward to your next update!',
//       replies: [
//         {
//           userId: founder._id,
//           replyText: 'Thanks! We will keep you posted.'
//         }
//       ]
//     });

//     console.log('✅ All dummy data inserted');
//   } catch (err) {
//     console.error('❌ Seeding failed:', err);
//   } finally {
//     mongoose.disconnect();
//   }
// }

// seedData();

async function seedData() {
  try {
    // ✅ Delete all existing data to prevent duplicates
    await User.deleteMany({});
    await Startup.deleteMany({});
    await InvestorPreference.deleteMany({});
    await Pitch.deleteMany({});
    await Meeting.deleteMany({});
    await Notification.deleteMany({});
    await Message.deleteMany({});
    await Rating.deleteMany({});
    await Comment.deleteMany({});

    // ✅ Insert fresh test data
    const founder = await User.create({
      name: 'Akshika Gupta',
      email: 'akshika@example.com',
      password: 'securepass123',
      role: 'founder',
      location: 'Prayagraj',
      verified: true
    });

    const investor = await User.create({
      name: 'Rohit Mehta',
      email: 'rohit@example.com',
      password: 'investpass456',
      role: 'investor',
      location: 'Delhi',
      verified: true
    });

    const startup = await Startup.create({
      founderId: founder._id,
      startupName: 'PitchBridge',
      domain: 'Networking',
      stage: 'MVP',
      summary: 'A platform to connect startups with investors.',
      location: 'India',
      targetRaise: 1000000,
      equityOffered: 12
    });

    await InvestorPreference.create({
      investorId: investor._id,
      preferredDomains: ['Networking', 'Tech'],
      fundingRange: { min: 100000, max: 500000 },
      locationInterest: ['India'],
      equityRange: { min: 5, max: 20 }
    });

    const pitch = await Pitch.create({
      startupId: startup._id,
      investorId: investor._id,
      message: 'Please review our startup.',
      status: 'pending'
    });

    await Meeting.create({
      pitchId: pitch._id,
      scheduledAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      meetingLink: 'https://zoom.us/meeting',
      notes: 'Discuss equity structure'
    });

    await Notification.create({
      userId: investor._id,
      message: 'You received a new pitch from PitchBridge.'
    });

    await Message.create({
      senderId: founder._id,
      receiverId: investor._id,
      message: 'Hello! Looking forward to connecting.',
      type: 'text',
      pitchId: pitch._id
    });

    await Rating.create({
      ratedBy: investor._id,
      ratedUserId: founder._id,
      startupId: startup._id,
      score: 5,
      review: 'Promising startup with clear vision.'
    });

    await Comment.create({
      userId: investor._id,
      targetType: 'startup',
      targetId: startup._id,
      comment: 'Looking forward to your next update!',
      replies: [
        {
          userId: founder._id,
          replyText: 'Thanks! We will keep you posted.'
        }
      ]
    });

    console.log('✅ All dummy data inserted');
  } catch (err) {
    console.error('❌ Seeding failed:', err);
  } finally {
    mongoose.disconnect();
  }
}

seedData();
