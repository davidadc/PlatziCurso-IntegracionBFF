import gravatar from '../../utils/gravatar';

test('Gravatar Function Test', () => {
  const email = 'jdoe@test.com';
  const gravatarUrl =
    'https://gravatar.com/avatar/ed0d3a512227965410059d3660bcc566';

  expect(gravatarUrl).toEqual(gravatar(email));
});
