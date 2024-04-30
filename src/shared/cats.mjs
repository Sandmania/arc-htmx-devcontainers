export const catIdPage = (cat) => {
    return `
      <div>
      <p>
        <span>Cat Id:</span>
        <span>${cat.catID}</span>
      </p>
      <p>
        <span>Name:</span>
        <span>${cat.name}</span>
      </p>
      </div>
      `
}