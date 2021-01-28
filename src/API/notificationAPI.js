import * as Notifications from 'expo-notifications'

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
export async function sendWelcomeNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bienvunue sur notre application MaxWin📬",
        body: 'Désormais vous pouvez vendre ou acheter gratuitement et facilement sur notre plateforme.',
        priority:'high'
      
      },
      trigger: { seconds: 10, },
      
    });
  }


  export async function sendItemAddedNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Etat de votre annonce 📣 \n",
        body: 'Nous vous informe que votre annonce est désormais visible sue notre application MaxWin',
        priority:'high'
      
      },
      trigger: { seconds: 60 },
      
    });
  }

  export async function sendItemRevisionNotification(name) {
    const triggerDay= new Date(Date.now()+15*24*3600*1000)
    triggerDay.setMinutes(0)
    triggerDay.setSeconds(0)
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Révision de votre annonce 📣\n"+name,
        body: "Si vous n'avez pas encore vendu votre article,Nous vous invitons à réviser le prix de votre produit par apport au prix du marché,et n'oubliez pas qu'une bonne annonce commence par une bonne photo",
        priority:'high'
      
      },
      trigger:{repeats:true,date:triggerDay}
      
    }).catch(err=>console.log(err.message));
  }