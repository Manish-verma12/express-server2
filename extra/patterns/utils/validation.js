
function validateEmail(email) {

  const regexEmail = /@successive.tech/;
  var flag = regexEmail.test(email);
  if (flag) {
    return true;
  }
  else {
    return false;
  }
}

function validateUser(users) {
  validEmail = [];
  invalidEmail = [];
  var validCount;


  users.forEach(e1 => {
    var flag = validateEmail(e1.reviewerEmail);
    if (flag == true) {
      validEmail.push(e1.reviewerEmail);
    }
    else {
      invalidEmail.push(e1.reviewerEmail);
    }



    var flag2 = validateEmail(e1.traineeEmail);
    if (flag2 == true) {
      validEmail.push(e1.traineeEmail);
    }
    else {
      invalidEmail.push(e1.traineeEmail);
    }





  });

  console.log("Valid email are :-");
  validEmail.forEach(element => {
    console.log(element);
  });


  console.log("invalid email are :-");
  invalidEmail.forEach(element => {
    console.log(element);
  });

}


const users = [
  {
    traineeEmail: "manish.verma@successive.tech",
    reviewerEmail: "ajay1.choudhary.successive.tech"
  },
  {
    traineeEmail: "asdf.verma@successive.tech",
    reviewerEmail: "shobhhit.choudhary.successive.tech"
  },
  {
    traineeEmail: "trainee3.verma@successive.tech",
    reviewerEmail: "ajay.choudhary@.successive.tech"
  },
  {
    traineeEmail: "manish.verma@successive.tech",
    reviewerEmail: "ajay.choudhary.successive.tech"
  },
  {
    traineeEmail: "manish.verma@successive.tech",
    reviewerEmail: "ajay.choudhary.successive.tech"
  },
  {
    traineeEmail: "manish.verma@successive.tech",
    reviewerEmail: "ajay.choudhary.successive.tech"
  },
  {
    traineeEmail: "manish.verma@successive.tech",
    reviewerEmail: "ajay.choudhary.successive.tech"
  },
  {
    traineeEmail: "manish.verma@successive.tech",
    reviewerEmail: "ajay.choudhary.successive.tech"
  },
  {
    traineeEmail: "manish.verma2@successive.tech",
    reviewerEmail: "ajay.choudhary.successive.tech"
  }
];



validateUser(users);