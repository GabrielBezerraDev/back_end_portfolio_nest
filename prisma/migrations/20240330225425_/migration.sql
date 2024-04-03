/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `CardGame` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `TypePokemon` (
    `tittle` VARCHAR(191) NOT NULL,
    `iconType` VARCHAR(191) NOT NULL,
    `iconColor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`tittle`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `CardGame_username_key` ON `CardGame`(`username`);
