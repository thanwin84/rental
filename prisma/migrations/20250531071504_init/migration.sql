-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `password` VARCHAR(191) NOT NULL,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `role` ENUM('tanent', 'manager', 'admin') NOT NULL DEFAULT 'tanent',
    `phoneNumber` VARCHAR(191) NULL,
    `forgotPasswordToken` VARCHAR(191) NULL,
    `forgotPasswordTokenExpiry` DATETIME(3) NULL,
    `verifyToken` VARCHAR(191) NULL,
    `verifyTokenExpiry` DATETIME(3) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
