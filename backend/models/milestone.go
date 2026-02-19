package models

type Milestone struct {
    ID        uint `gorm:"primaryKey"`
    ProjectID uint
    Name      string
    DueDate   time.Time
    Status    string
}
