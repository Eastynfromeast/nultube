import multer from "multer";

export const localMiddleware = (req, res, next) => {
	res.locals.siteName = "Nultube";
	next();
};
