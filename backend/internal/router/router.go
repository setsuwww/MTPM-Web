package router

import (
	"backend/internal/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

	SetupAuthRoutes(r)

	// contoh protected route
	protected := r.Group("/api")
	protected.Use(middleware.AuthMiddleware())
	{
		protected.GET("/profile", func(c *gin.Context) {
			user, _ := c.Get("currentUser")
			c.JSON(200, user)
		})

		protected.GET("/admin", middleware.RoleMiddleware("SUPER_ADMIN", "COMPANY_ADMIN"), func(c *gin.Context) {
			c.JSON(200, gin.H{"msg": "Welcome admin"})
		})
	}

	return r
}
