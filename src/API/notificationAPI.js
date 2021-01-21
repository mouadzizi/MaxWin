import * as Notifications from 'expo-notifications'


export async function sendWelcomeNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bienvunue sur notre application Maxwin📬",
        body: 'Notification',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  }