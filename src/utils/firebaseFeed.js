const { db } = require("./firebaseHelper");


async function getReview() {
    return db
      .collection("review")
      .get()
      .then(res=> {
        return res.docs.map(doc => {
            if (doc.id) {
              return {
                comment: doc.comment,
                date: doc.data().date,
                img: doc.data().img,
                name_shop: doc.data().name_shop,
                rate: doc.data().rate,
                user_id: doc.data().img
              };
            }
          });
      })
      .catch(function(error) {
        console.error("Error ", error);
      });
  }

  module.exports = {
    getReview
  };
  