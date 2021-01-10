import * as Notifications from 'expo-notifications'


export async function sendWelcomeNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Welcome to our App📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  }