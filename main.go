package main

import (
	"github.com/gin-gonic/gin";
	 "MEERKAT/controller"
)

// func main() {
// 	r := gin.Default()
// 	r.GET("/", func(c *gin.Context) {
// 		c.JSON(200, gin.H{
// 			"data": "Hello World !!!",
// 		})
// 	})
// 	r.Run()
// }

func main() {
	r := gin.Default()
	r.GET("/", controller.Home)
	r.Run()
}
