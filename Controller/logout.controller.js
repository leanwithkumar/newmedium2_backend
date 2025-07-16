
export const logout = async (req, res)=>{
    
    try{
         
       res.clearCookie("medium2", {
       httpOnly: true,
       sameSite: "Strict",
       });
       res.status(200).json({ message: "Logged out successfully" });

    }
    catch(error){
        res.status(400).json({
            message : "Unable to logout"
        })
        
    }
}