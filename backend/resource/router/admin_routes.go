package router

import (
	"backend/resource/controllers/admin"
	"backend/resource/middleware"
	"backend/resource/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func AdminRoutes(r *gin.Engine, db *gorm.DB) {
	uc := &admin.UserController{DB: db}

	adminGroup := r.Group("/admin")
	adminGroup.Use(middleware.AuthMiddleware(db))
	{
		adminGroup.GET("/users", middleware.RoleMiddleware(models.PlatformSuperAdmin, models.PlatformAdmin), uc.GetUsers)
		adminGroup.GET("/users/:id", middleware.RoleMiddleware(models.PlatformSuperAdmin, models.PlatformAdmin), uc.GetUser)
		adminGroup.POST("/users", middleware.RoleMiddleware(models.PlatformSuperAdmin, models.PlatformAdmin), uc.CreateUser)
		adminGroup.PATCH("/users/:id", middleware.RoleMiddleware(models.PlatformSuperAdmin, models.PlatformAdmin), uc.UpdateUser)
		adminGroup.DELETE("/users/:id", middleware.RoleMiddleware(models.PlatformSuperAdmin, models.PlatformAdmin), uc.DeleteUser)
	}
}
