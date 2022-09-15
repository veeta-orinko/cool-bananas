const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../users')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getUser', () => {
  it('returns an object with a users name and email that matches the auth0 id provided', () => {
    return db.getUser('1', testDb).then((userObj) => {
      expect(userObj.name).toBe('Cool')
      expect(userObj.email).toBe('cool@email.com')
    })
  })
})

describe('getsUsers', () => {
  it('gets all user details from the users table', () => {
    return db.getUsers(testDb).then((usersData) => {
      expect(usersData).toHaveLength(4)
    })
  })
})

describe('createUser', () => {
  it('inserts user details into the users table', () => {
    return db
      .createUser(
        { auth0_id: '999', name: 'JV', email: 'JV@iscool.com' },
        testDb
      )
      .then((recordsUpdated) => {
        expect(recordsUpdated).toStrictEqual([5])
        return db.getUsers(testDb)
      })
      .then((usersData) => {
        expect(usersData[4].name).toBe('JV')
        expect(usersData[4].email).toBe('JV@iscool.com')
      })
  })
})

describe('userExists', () => {
  it('returns true if the name already exists in the database', () => {
    return db.userExists('Cool', testDb).then((userExistance) => {
      expect(userExistance).toBe(true)
    })
  })
  it('returns false if the name already exists in the database', () => {
    return db.userExists('JimmyTheBanana', testDb).then((userExistance) => {
      expect(userExistance).toBe(false)
    })
  })
})
