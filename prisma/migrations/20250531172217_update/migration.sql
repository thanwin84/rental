/*
  Warnings:

  - Added the required column `userId` to the `FavouriteProperty` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `favouriteproperty` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `FavouriteProperty` ADD CONSTRAINT `FavouriteProperty_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
