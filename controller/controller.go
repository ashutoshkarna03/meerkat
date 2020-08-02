package controller

import "github.com/gin-gonic/gin"
import "net/http"


func Home(c *gin.Context) {
  
	c.JSON(http.StatusOK, gin.H{"message": "Hello World !!!"})
  }