const mongoose = require('mongoose');

const MONGODB_URI =
  'mongodb+srv://natthaphorn:c76b58e8@cluster0.4u21s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/node-passport', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
