-- CreateTable
CREATE TABLE `CardGame` (
    `username` VARCHAR(191) NOT NULL,
    `score` DOUBLE NOT NULL,
    `rank` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
