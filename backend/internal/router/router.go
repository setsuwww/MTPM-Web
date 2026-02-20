package router

import (
	"backend/internal/handlers"
	"backend/internal/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Authorization", "Content-Type"},
		AllowCredentials: true,
	}))

	r.POST("/register", handlers.Register)
	r.POST("/login", handlers.Login)

	SetupAuthRoutes(r)

	// contoh protected route
	auth := r.Group("/api")
	auth.Use(middleware.AuthMiddleware())
	{
		auth.GET("/profile", func(c *gin.Context) {
			user, _ := c.Get("currentUser")
			c.JSON(200, user)
		})
	}

	return r
}
