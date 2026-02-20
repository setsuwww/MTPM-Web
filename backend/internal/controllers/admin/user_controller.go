package admin

import (
	"net/http"
	"strconv"

	"backend/internal/helpers"
	"backend/internal/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type UserController struct {
	DB *gorm.DB
}

func (u *UserController) GetUsers(c *gin.Context) {
	var users []models.User
	if err := u.DB.Find(&users).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, users)
}

func (u *UserController) GetUser(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var user models.User
	if err := u.DB.First(&user, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}
	c.JSON(http.StatusOK, user)
}

func (u *UserController) CreateUser(c *gin.Context) {
	var input models.User
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	input.Password = helpers.HashPassword(input.Password)

	if err := u.DB.Create(&input).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, input)
}

func (u *UserController) UpdateUser(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var user models.User
	if err := u.DB.First(&user, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	var input struct {
		Name     *string      `json:"name"`
		Email    *string      `json:"email"`
		Role     *models.Role `json:"role"`
		IsActive *bool        `json:"isActive"`
		Password *string      `json:"password"`
	}
	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if input.Name != nil {
		user.Name = *input.Name
	}
	if input.Email != nil {
		user.Email = *input.Email
	}
	if input.Role != nil {
		user.Role = *input.Role
	}
	if input.IsActive != nil {
		user.IsActive = *input.IsActive
	}
	if input.Password != nil {
		user.Password = helpers.HashPassword(*input.Password)
	}

	u.DB.Save(&user)
	c.JSON(http.StatusOK, user)
}

func (u *UserController) DeleteUser(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	if err := u.DB.Delete(&models.User{}, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "User deleted"})
}
