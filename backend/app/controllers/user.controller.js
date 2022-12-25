exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.buyerBoard = (req, res) => {
    res.status(200).send("Buyer Content.");
  };

  exports.sellerBoard = (req, res) => {
    res.status(200).send("Seller Content.");
  };

  exports.tutorBoard = (req, res) => {
    res.status(200).send("Tutor Content.");
  };
  
  exports.techBoard = (req, res) => {
    res.status(200).send("Tech Content.");
  };