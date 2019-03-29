const express = require('express')
const { startCase } = require('lodash')

const router = express.Router()

const fields = [
  { label: 'First Name', name: 'firstName', required: true },
  { label: 'Last Name', name: 'lastName', required: true },
  { label: 'Address', name: 'streetAddress' },
  { label: 'City', name: 'city' },
  { label: 'State', name: 'state' },
  { label: 'Zip Code', name: 'zipCode' },
  { label: 'Birthday', name: 'birthdate', type: 'date' },
  { label: 'Favorite Color', name: 'favoriteColor' },
]

router.get('/', function (req, res, next) {
  const { profile } = req.user
  const descriptionList = Object.keys(profile).sort()
    .map(key => ({
      term: startCase(key),
      details: profile[key],
    }))
    .filter(({ details }) => details)

  res.render('dashboard', {
    title: 'Dashboard',
    descriptionList,
    user: req.user,
  })
})

router.get('/test', function (req, res, next ) {
  res.render('test', {
    title: 'Dashboard | test',
    user: req.user,
  })
})

router.post('/', async (req, res, next) => {
  try {
    Object.assign(req.user.profile, req.body)

    await req.user.update()
  } catch (error) {
    console.log(error)
  }

  next()
})

router.use('/profile', (req, res, next) => {
  res.render('profile', {
    title: 'Profile',
    user: req.user,
    fields: fields.map(field => ({
      ...field,
      value: req.user.profile[field.name],
    })),
  })
})

module.exports = router
