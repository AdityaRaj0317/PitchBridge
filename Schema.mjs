// schema.mjs
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const { Schema, model } = mongoose;

// User Schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 8 },
  role: { type: String, enum: ['founder', 'investor','admin'], default: 'founder' },
  location: { type: String },
  verified: { type: Boolean, default: false },
  profilePic: { type: String },
  bio: { type: String, maxLength: 300 },
  linkedin: { type: String },
  createdAt: { type: Date, default: Date.now }
});


// Startup Schema
const StartupSchema = new Schema({
  founderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  startupName: { type: String, required: true },
  domain: { type: String, required: true },
  stage: { type: String, enum: ['idea', 'MVP', 'revenue'], required: true },
  pitchDeck: { type: String },
  videoPitch: { type: String },
  summary: { type: String, maxLength: 1000 },
  location: { type: String },
  targetRaise: { type: Number, min: 0 },
  equityOffered: { type: Number, min: 0, max: 100 },
  createdAt: { type: Date, default: Date.now }
});

// Investor Preference Schema
const InvestorPreferenceSchema = new Schema({
  investorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  preferredDomains: [String],
  fundingRange: {
    min: { type: Number },
    max: { type: Number }
  },
  locationInterest: [String],
  equityRange: {
    min: { type: Number },
    max: { type: Number }
  },
  verified: { type: Boolean, default: false }
});

// Pitch Schema
const PitchSchema = new Schema({
  startupId: { type: Schema.Types.ObjectId, ref: 'Startup', required: true },
  investorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['pending', 'viewed', 'interested', 'rejected'],
    default: 'pending'
  },
  message: { type: String, maxLength: 500 },
  createdAt: { type: Date, default: Date.now }
});

// Meeting Schema
const MeetingSchema = new Schema({
  pitchId: { type: Schema.Types.ObjectId, ref: 'Pitch', required: true },
  scheduledAt: { type: Date, required: true },
  meetingLink: { type: String },
  notes: { type: String, maxLength: 500 },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled'
  }
});

// Notification Schema
const NotificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});


// Message Schema
const MessageSchema = new Schema({
  senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  type: {
    type: String,
    enum: ['text', 'image', 'file'],
    default: 'text'
  },
  pitchId: { type: Schema.Types.ObjectId, ref: 'Pitch' },
  seen: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

// Rating Schema
const RatingSchema = new Schema({
  ratedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  ratedUserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  startupId: { type: Schema.Types.ObjectId, ref: 'Startup' },
  score: { type: Number, min: 1, max: 5, required: true },
  review: { type: String, maxLength: 500 },
  timestamp: { type: Date, default: Date.now }
});

// Comment Schema
const CommentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  targetType: { type: String, enum: ['startup', 'user'], required: true },
  targetId: { type: Schema.Types.ObjectId, required: true },
  comment: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  replies: [
    {
      userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
      replyText: { type: String, required: true },
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

// export const User = model('User', UserSchema);
// export const Startup = model('Startup', StartupSchema);
// export const InvestorPreference = model('InvestorPreference', InvestorPreferenceSchema);
// export const Pitch = model('Pitch', PitchSchema);
// export const Meeting = model('Meeting', MeetingSchema);
// export const Notification = model('Notification', NotificationSchema);
// export const Message = model('Message', MessageSchema);
// export const Rating = model('Rating', RatingSchema);
// export const Comment = model('Comment', CommentSchema);


UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


export const User = mongoose.models.User || model('User', UserSchema);
export const Startup = mongoose.models.Startup || model('Startup', StartupSchema);
export const InvestorPreference = mongoose.models.InvestorPreference || model('InvestorPreference', InvestorPreferenceSchema);
export const Pitch = mongoose.models.Pitch || model('Pitch', PitchSchema);
export const Meeting = mongoose.models.Meeting || model('Meeting', MeetingSchema);
export const Notification = mongoose.models.Notification || model('Notification', NotificationSchema);
export const Message = mongoose.models.Message || model('Message', MessageSchema);
export const Rating = mongoose.models.Rating || model('Rating', RatingSchema);
export const Comment = mongoose.models.Comment || model('Comment', CommentSchema);

