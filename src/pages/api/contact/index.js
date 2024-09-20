import dbConnect from "@/config/dbConnect";
import contactModel from "@/models/contact";

export default async function handler(req, res) {
  dbConnect();

  switch (req.method) {
    case "POST":
      try {
        const query = await contactModel.create(req.body);
        res.status(201).json({
          success: true,
          query,
        });
      } catch (error) {
        console.log(error);

        if (error.code === 11000) {
          if (error.keyPattern.name) {
            return res.status(409).json({
              success: false,
              message: "Name Already Exists!",
            });
          }
        }

        // Error Handle for Required Fields
        if (error.message?.split(":")[2]?.split(",")[0]?.trim()) {
          var errMessage = error.message.split(":")[2].split(",")[0].trim();
          return res.status(400).json({
            success: false,
            message: errMessage,
          });
        }
      }
      break;

    case "GET":
      try {
        const getQueries = await contactModel.find();
        res.status(200).json({
          success: true,
          getQueries,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "Internal Server Error!",
        });
      }

    default:
      break;
  }
}
