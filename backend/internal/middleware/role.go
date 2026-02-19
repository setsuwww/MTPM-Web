package middleware

import (
	"backend/internal/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func RoleMiddleware(allowedRoles ...models.Role) gin.HandlerFunc {
	return func(c *gin.Context) {
		userIface, exists := c.Get("currentUser")
		if !exists {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
			return
		}

		user := userIface.(models.User)

		for _, role := range allowedRoles {
			if user.Role == role {
				c.Next()
				return
			}
		}

		c.JSON(http.StatusForbidden, gin.H{"error": "Forbidden"})
		c.Abort()
	}
}
