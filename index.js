const functions = require('firebase-functions')
const admin = require('firebase-admin')
const {dialogflow} = require('actions-on-google')

const assessmentsList = "Assessments List"
const assignmentsList = 'Assignments List'
const firstTask = 'First Task'
const assessmentsEntity = 'Assessments'

const app = dialogflow()

admin.initializeApp({
  credential: admin.credential.cert({
  "type": "service_account",
  "project_id": "hackthenorth-407ef",
  "private_key_id": "44d02005991cca68b95f9326f929695e21a07488",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJq29FYEYYqAfE\nSPIQP+JqzviAqH1n+HQ8quNthbD39WervNlYwibNH8uM9dO4sn0pSw7oGkjPSK1z\ni3jgZ9Vn4SDR0VoKaQE5Ts+ymOQrkpB7pRPGBafOc6v3zIiTSDFtfo97X7zc3YpO\nrIXZ8h55CBUT2GPwq8SIoAMxKJPH1wkQ84afsoVrpHGVbqgHJt7RWSS9uhruNajZ\nh8rgcVIrGzouMXqnrt8ruO25Jy0vac6SSKKK0c/Y78fIZKhFngtQRz7xh5T7Dgs0\nB9Zgmed7xVQaHc1lh73VAeFO3iosb6K3vmCOf94szV7fh7ZGdKk1JL8aKqcLgsVs\nbhDtA4AlAgMBAAECggEABcpeGsoZoSYb+PsWNji7XdE9CeasmSJlZgOLHa8vxmLd\nu+zjebyzZALkc5LwZhZ76QZecnQkwIzn7BAmY50fn8izSkr+UJu0vQpCBPEGZiji\nbKZwA6jQaWlhV+9fwYjaYHg4kvSMBfR3fuxNuJUO4m9EuanmLrgj379mcBAn9B4v\nuD7xFnLqvTthToU2PWntsemkHBf2HB8pCCtCkVEBvX9IIQv7vkp2bfNJ9MU0Z+l/\nFAe+WBGgYmiz5/5jZhAHcZbISJbfEQvWPxhtDg+rO20sywCO9yhnecuNzIO5I0/7\nmQbr3lzqwmbMIHptQyt1PRN8rEinvmQR+U13NpDoSQKBgQDlDJ/P08pNyI2SF8od\n917FHYlO0VdTa8MWocTokkgDJ+Dql23+99+qHdJvlhkXlsbIBhaEHzwhRE1QfJKO\n/vHeOapALPgNchoILmtMOPF8qScQ6G/hq4NIAKuIcAK5ARA+EF7yaoscEy0XH5bq\njfJU47ohvKDO/ykeJenKq8N0CQKBgQDhZhYb5ErSxkY+s2lTL1rXtXd459pMyXWl\nL2ONpE0DKvMTLMU2VdKUDv42Bpmbach5Dwai0PDwhdyvDBy7uAG2cTi24uCXFtNj\nuV6ekC1KvMu9PCzJLRgQ/nkGhVZnm4YthVNEvplJSLk01hMLyLyAHpLQ0i9nvO0T\nNZZmbMSKPQKBgQDIiK76Y/DA/Q+FkrJwXf1pEpz+lqWf8b8R93vQKxJFQQrYGNBC\n5H28EPQGoiFB184dncbk0fvxHD2cdBRUgbz81PvLyBM8omNMOmfSiiBTBj2fvgEG\nUQVVatDDWV3o35d63xZhowo8AEX/8rZMkQ5TaDW0B9O6pwc2z/bKbGtpEQKBgBKE\nWHyiHKOENnEgPB7hXQ0rk00TfxOf2VJgukUAonMILD//BZSZKFuRf8Dgee4Smq2X\nVmw5zhF0bdTToeiqDTn3wzkDGoBPF76xk9xi69Wf/Pzm3KcKVVfQEBFBEwAf/r3u\nnhCft+gVWWHF1Hq7WwELgfQ10D8tfix90oVHmj3hAoGANVEtA94viH5YWjfwjMip\nWQgGyIWVID28w5g0hexCaJfsC0+rzm8gMdyWHjq3mCzZgC0yS/6vU+1qcbV+NiWf\nZ7uWOs533GWPAJ3//WEgwDxZ77E72lC6nNjmLJF5zh0M7om9sfNzeUWFUwOPn0dd\nKEChBafkVoN0aAxIUlaBi5I=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-ibj9p@hackthenorth-407ef.iam.gserviceaccount.com",
  "client_id": "115623694237719819738",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ibj9p%40hackthenorth-407ef.iam.gserviceaccount.com"
}),
  databaseURL: "https://hackthenorth-407ef.firebaseio.com"
});

app.intent(assignmentsList, (conv) => {
 conv.ask("Good Job we got to assignments")   
})

app.intent("Default Fallback Intent", (conv) => {
 conv.ask("I don't understand.")   
})

app.intent('Course Specific Assignments', (conv) => {
  const type = conv.parameters['Courses'].toLowerCase();
  switch (type){
    case "calculus":
      conv.ask("You have a lot of work to finish for this course... Shall I open up Netflix for your daily 3 hour binge now?")
      break;
    case "algebra":
      conv.ask("You have a lot of work to finish for this course... Shall I open up Netflix for your daily 3 hour binge now?")
      break;
    case "computer science":
      conv.ask("You have a lot of work to finish for this course... Shall I open up Netflix for your daily 3 hour binge now?")
      break;
    case "economics":
      conv.ask("You have a lot of work to finish for this course... Shall I open up Netflix for your daily 3 hour binge now?")
      break;
    case "chemistry":
      conv.ask("You have a lot of work to finish for this course... Shall I open up Netflix for your daily 3 hour binge now?")
      break;
    case "biology":
      conv.ask("You have a lot of work to finish for this course... Shall I open up Netflix for your daily 3 hour binge now?")
      break;
    case "engineering":
      // Create a reference to the cities collection
      var root = db.collection('users');
    
      // Create a query against the collection
      var queryRef = citiesRef.where('Name', '==', 'Ashpan Raskar').where('dueDate', '>=', "09/16/2018 08:00:00 AM");
      
      if (!queryRef){
          conv.ask("You don't have any eng assignments due soon...");
          break;
      } else {
          conv.ask("You have 1 engineering assignment due soon...better get to work");
          break;
      }
      conv.ask("You have a lot of work to finish for this course... Shall I open up Netflix for your daily 3 hour binge now?")
      break;
    case "physics":
      conv.ask("You have a lot of work to finish for this course... Shall I open up Netflix for your daily 3 hour binge now?")
      break;
    default:
      conv.ask("Please be more specific")
    //   conv.ask(type)
  }
})

app.intent(assessmentsList, (conv) => {
  const type = conv.parameters[assessmentsEntity].toLowerCase();
  if (type == "tests"){
    //Firebase people pull shit her to get the date
    conv.ask("Your next test is this week, but lets be real. You probably won't study for it until the last day")
  }
  else if (type == "quizzes"){
    //Firebase people pull shit her to get the date
    conv.ask("Your next quiz is this week, but lets be real. You probably won't study for it until the last day")
  }
  else if (type == " midterms"){
    //Firebase people pull shit her to get the date
    conv.ask("Your next midterm is this week, but lets be real. You probably won't study for it until the last day")
  }
  else if (type == "finals"){
    //Firebase people pull shit her to get the date
    conv.ask("Your next final is this week, but lets be real. You probably won't study for it until the last day")
  }
  else if (type == "make up"){
    //Firebase people pull shit her to get the date
    conv.ask("Your make up is this week, but lets be real. You probably won't study for it until the last day")
  }
  else if (type == "exam"){
    //Firebase people pull shit her to get the date
    conv.ask("Your next exam is this week, but lets be real. You probably won't study for it until the last day")
  }
  else{
    conv.ask("Be specific and try again please")
  }
}
)

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app)