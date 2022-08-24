const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initi

exports.addWelcomeMessage = functions.auth.user().onCreate(async (user) => {
    functions.logger.log('A new user signed in for the first time.');
    const fullName = user.displayName || 'Anonymous';

    await admin.firestore().collection('messages').add({
        name: 'Firebase Bot',
        profilePicUrl: '/images/firebase-logo.png',
        text: `Welcome to the Rundle Xing Budget App ${fullName}!`,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    functions.logger.log('Welcome message written to database.');
});