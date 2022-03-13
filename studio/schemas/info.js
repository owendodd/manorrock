export default {
    name: "info",
    title: "Info",
    type: "document",
    __experimental_actions: [
        /* "create", "delete", */ "update", "publish"
      ],
    fields: [
        {name: "name", title: "Name", type: "string"},
        {name: "address", title: "Address", type: "string"},
        {name: "citystate", title: "City, State", type: "string"},
        {name: "phone", title: "Phone", type: "string"},
        {name: "email", title: "Email", type: "string"},
    ]
}