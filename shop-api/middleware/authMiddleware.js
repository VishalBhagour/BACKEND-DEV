const authMiddleware = (req, res, next) => {

const token = req.headers.authorization;

if (token === "Bearer mytoken123") {
next();
}
else {
res.status(401).json({
message: "Unauthorized"
});
}

};

export default authMiddleware;