import prisma from '../prisma';

export const addToFavourite = async ({
  propertyId,
  userId,
}: {
  propertyId: string;
  userId: string;
}) => {
  const existing = await prisma.favouriteProperty.findUnique({
    where: {
      userId_propertyId: {
        userId,
        propertyId,
      },
    },
  });

  if (existing) {
    await prisma.favouriteProperty.delete({
      where: {
        userId_propertyId: {
          userId,
          propertyId,
        },
      },
    });
    return null;
  } else {
    const favouriteProperty = await prisma.favouriteProperty.create({
      data: {
        userId,
        propertyId,
      },
    });
    return favouriteProperty;
  }
};
