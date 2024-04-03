/*
  Warnings:

  - You are about to alter the column `rank` on the `CardGame` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `CardGame` MODIFY `score` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `rank` DOUBLE NOT NULL DEFAULT 0;
