import daraja from "daraja";

const darajaInstance = new daraja.Daraja({
  consumer_key: "tY8THx5O8cXoxnh8bucXzdy9dTRZ7XH2",
  consumer_secret: "CKQu7p7rDzGKX7Sp"
});
const stkPush = new daraja.STKPush();
stkPush.setAmount(15000);
stkPush.setPhoneNumber("254740318048");
stkPush.setCallback((response) => {
  console.log(response);
});
stkPush.send();
