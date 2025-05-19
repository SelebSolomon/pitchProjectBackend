exports.getPosts = async (req , res) => {
   const {page} =req.query;
   const postPerPage = 10;

   try {
    let pageNum = 0;
    if (page <= 1) {
        pageNum = 0
    }
   } catch (error) {
    console.log(error)
   }
}