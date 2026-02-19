package models

type Expense struct {
    ID        uint `gorm:"primaryKey"`
    ProjectID uint
    Amount    float64
    Type      string
    Notes     string
    CreatedAt time.Time
}
