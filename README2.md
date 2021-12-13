

/*
export const bcrypt = () => {

    const password = await bcrypt.hash(input.password, 10);

    return success(user.id);

  };


  const user = await context.prisma.user({

    email: input.email });

  if (!user) return fail({ email: 'NOT_EXISTS' });

  const validPassword = await bcrypt.compare(input.password, user.password);


  if (!validPassword)

  return fail({

     password: 'WRONG_PASSWORD'

    });

  return success(user.id);


};

*/