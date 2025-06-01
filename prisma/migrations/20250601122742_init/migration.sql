/*
  Warnings:

  - Made the column `isParkingIncluded` on table `property` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `property` MODIFY `isParkingIncluded` BOOLEAN NOT NULL DEFAULT false;
