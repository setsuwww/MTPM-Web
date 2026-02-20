package router

import (
	"backend/internal/controllers/admin"
	"backend/internal/middleware"
	"backend/internal/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func AdminRoutes(r *gin.Engine, db *gorm.DB) {
	uc := &admin.UserController{DB: db}

	adminGroup := r.Group("/admin")
	adminGroup.Use(middleware.AuthMiddleware(db))
	{
		adminGroup.GET("/users", middleware.RoleMiddleware(models.SUPER_ADMIN, models.COMPANY_ADMIN), uc.GetUsers)
		adminGroup.GET("/users/:id", middleware.RoleMiddleware(models.SUPER_ADMIN, models.COMPANY_ADMIN), uc.GetUser)
		adminGroup.POST("/users", middleware.RoleMiddleware(models.SUPER_ADMIN, models.COMPANY_ADMIN), uc.CreateUser)
		adminGroup.PATCH("/users/:id", middleware.RoleMiddleware(models.SUPER_ADMIN, models.COMPANY_ADMIN), uc.UpdateUser)
		adminGroup.DELETE("/users/:id", middleware.RoleMiddleware(models.SUPER_ADMIN, models.COMPANY_ADMIN), uc.DeleteUser)
	}
}
