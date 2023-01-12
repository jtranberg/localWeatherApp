export const ICON_MAP = new Map()


addmapping([0, 1], "sun")
addmapping([2], "cloud-sun")
addmapping([3], "cloud")
addmapping([45, 48], "smog")
addmapping([51, 53, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "cloud-showers-heavy")
addmapping([71, 73, 75, 77, 85, 56], "snowflake")
addmapping([95, 96, 99], "cloud-bolt")



function addmapping(values, icon) {
values.forEach(value => {
    ICON_MAP.set(value, icon)
  })
}
