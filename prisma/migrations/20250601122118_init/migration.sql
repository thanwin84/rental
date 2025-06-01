/*
  Warnings:

  - Made the column `squareFeet` on table `property` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `property` MODIFY `squareFeet` DOUBLE NOT NULL DEFAULT 0;
