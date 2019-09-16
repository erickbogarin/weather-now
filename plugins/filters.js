import Vue from 'vue'

function time(val, locale = 'default') {
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }

  return new Intl.DateTimeFormat(locale, options).format(val)
}

Vue.filter('time', time)
