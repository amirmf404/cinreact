import {
  CinCrudModel,
  CinEmail,
  CinExclude,
  CinExcludeTranslate,
  CinExpose,
  CinExposeTranslate,
  CinId,
  CinLabel,
  CinModel,
  CinPassword,
  CinPhoneNumber,
  CinSearchable,
  CinSortable,
  CinText,
  type CrudDataRepository,
  type Pagination,
  type PaginationOptions,
} from "cints-core";

const userBaseList: UserModel[] = [
  {
    id: 1,
    firstName: "Bobbee",
    lastName: "Karpeev",
    phoneNumber: "977-482-9366",
    password: "qwertyuiop",
  },
  {
    id: 2,
    firstName: "Lionello",
    lastName: "Muzzini",
    phoneNumber: "615-761-4937",
    password: "qwertyuiop",
  },
  {
    id: 3,
    firstName: "Sargent",
    lastName: "Snowling",
    phoneNumber: "364-222-8367",
    password: "qwertyuiop",
  },
  {
    id: 4,
    firstName: "Anestassia",
    lastName: "Augustine",
    phoneNumber: "227-588-6949",
    password: "qwertyuiop",
  },
  {
    id: 5,
    firstName: "Aksel",
    lastName: "Johnsson",
    phoneNumber: "160-655-0018",
    password: "qwertyuiop",
  },
  {
    id: 6,
    firstName: "Des",
    lastName: "Slany",
    phoneNumber: "359-949-2482",
    password: "qwertyuiop",
  },
  {
    id: 7,
    firstName: "Marsha",
    lastName: "Rappoport",
    phoneNumber: "835-120-0628",
    password: "qwertyuiop",
  },
  {
    id: 8,
    firstName: "Dev",
    lastName: "Wyllcock",
    phoneNumber: "937-741-9526",
    password: "qwertyuiop",
  },
  {
    id: 9,
    firstName: "Thaddus",
    lastName: "Krauss",
    phoneNumber: "502-268-4501",
    password: "qwertyuiop",
  },
  {
    id: 10,
    firstName: "Veronique",
    lastName: "Hansman",
    phoneNumber: "787-293-7650",
    password: "qwertyuiop",
  },
  {
    id: 11,
    firstName: "Clarita",
    lastName: "Gregon",
    phoneNumber: "456-880-9658",
    password: "qwertyuiop",
  },
  {
    id: 12,
    firstName: "Lotty",
    lastName: "Riccardo",
    phoneNumber: "497-687-3068",
    password: "qwertyuiop",
  },
  {
    id: 13,
    firstName: "Brion",
    lastName: "Esselin",
    phoneNumber: "556-744-8431",
    password: "qwertyuiop",
  },
  {
    id: 14,
    firstName: "Abbot",
    lastName: "Quenby",
    phoneNumber: "267-449-5825",
    password: "qwertyuiop",
  },
  {
    id: 15,
    firstName: "Ernest",
    lastName: "Hegden",
    phoneNumber: "300-761-1702",
    password: "qwertyuiop",
  },
  {
    id: 16,
    firstName: "Klarika",
    lastName: "Gartrell",
    phoneNumber: "843-836-5560",
    password: "qwertyuiop",
  },
  {
    id: 17,
    firstName: "Giorgi",
    lastName: "Tabord",
    phoneNumber: "481-994-8203",
    password: "qwertyuiop",
  },
  {
    id: 18,
    firstName: "Hyman",
    lastName: "Wilcocks",
    phoneNumber: "388-109-2471",
    password: "lM8=9Jb'=",
  },
  {
    id: 19,
    firstName: "Karalee",
    lastName: "De Carolis",
    phoneNumber: "764-358-6794",
    password: "qwertyuiop",
  },
  {
    id: 20,
    firstName: "Xenos",
    lastName: "McComish",
    phoneNumber: "907-694-9185",
    password: "qwertyuiop",
  },
  {
    id: 21,
    firstName: "Manuel",
    lastName: "Zuker",
    phoneNumber: "926-164-5042",
    password: "qwertyuiop",
  },
  {
    id: 22,
    firstName: "Uri",
    lastName: "Colombier",
    phoneNumber: "504-198-1624",
    password: "qwertyuiop",
  },
  {
    id: 23,
    firstName: "Wilhelmine",
    lastName: "Beckles",
    phoneNumber: "440-917-5200",
    password: "qwertyuiop",
  },
  {
    id: 24,
    firstName: "Odessa",
    lastName: "Eglin",
    phoneNumber: "823-475-6629",
    password: "qwertyuiop",
  },
  {
    id: 25,
    firstName: "Lanie",
    lastName: "Gouge",
    phoneNumber: "546-935-9232",
    password: "qwertyuiop",
  },
  {
    id: 26,
    firstName: "Annice",
    lastName: "Reavey",
    phoneNumber: "266-482-0256",
    password: "qwertyuiop",
  },
  {
    id: 27,
    firstName: "Culver",
    lastName: "Silbert",
    phoneNumber: "130-118-1725",
    password: "qwertyuiop",
  },
  {
    id: 28,
    firstName: "Loni",
    lastName: "McKibbin",
    phoneNumber: "706-703-9315",
    password: "qwertyuiop",
  },
  {
    id: 29,
    firstName: "Sandy",
    lastName: "Ropkins",
    phoneNumber: "283-484-4788",
    password: "qwertyuiop",
  },
  {
    id: 30,
    firstName: "Armstrong",
    lastName: "Harty",
    phoneNumber: "492-923-7410",
    password: "qwertyuiop",
  },
  {
    id: 31,
    firstName: "Roshelle",
    lastName: "Guthrie",
    phoneNumber: "471-188-6735",
    password: "qwertyuiop",
  },
  {
    id: 32,
    firstName: "Claudio",
    lastName: "Etches",
    phoneNumber: "446-149-0074",
    password: "eA0?4bnfG'<i",
  },
  {
    id: 33,
    firstName: "Hugues",
    lastName: "Dimanche",
    phoneNumber: "725-792-5560",
    password: "qwertyuiop",
  },
  {
    id: 34,
    firstName: "Rona",
    lastName: "Carvilla",
    phoneNumber: "806-185-8857",
    password: "qwertyuiop",
  },
  {
    id: 35,
    firstName: "Rudolph",
    lastName: "Franz-Schoninger",
    phoneNumber: "403-788-6780",
    password: "sZ7'SWrI*3",
  },
  {
    id: 36,
    firstName: "Dallas",
    lastName: "Cleugh",
    phoneNumber: "617-945-6780",
    password: "qwertyuiop",
  },
  {
    id: 37,
    firstName: "Angela",
    lastName: "Libby",
    phoneNumber: "802-435-6277",
    password: "qwertyuiop",
  },
  {
    id: 38,
    firstName: "Lesley",
    lastName: "Worswick",
    phoneNumber: "720-585-0389",
    password: "qwertyuiop",
  },
  {
    id: 39,
    firstName: "Teriann",
    lastName: "Terrell",
    phoneNumber: "332-680-1040",
    password: "qwertyuiop",
  },
  {
    id: 40,
    firstName: "Reese",
    lastName: "Heggs",
    phoneNumber: "423-161-8981",
    password: "qwertyuiop",
  },
  {
    id: 41,
    firstName: "Becca",
    lastName: "Zorzi",
    phoneNumber: "868-477-3022",
    password: "qwertyuiop",
  },
  {
    id: 42,
    firstName: "Sig",
    lastName: "Brugger",
    phoneNumber: "894-631-2884",
    password: "qwertyuiop",
  },
  {
    id: 43,
    firstName: "Christoper",
    lastName: "Bodycombe",
    phoneNumber: "240-463-7278",
    password: "qwertyuiop",
  },
  {
    id: 44,
    firstName: "Lindie",
    lastName: "Duddle",
    phoneNumber: "892-984-7770",
    password: "qwertyuiop",
  },
  {
    id: 45,
    firstName: "Enrique",
    lastName: "Cruttenden",
    phoneNumber: "105-747-4003",
    password: "qwertyuiop",
  },
  {
    id: 46,
    firstName: "Jelene",
    lastName: "Brookesbie",
    phoneNumber: "229-207-1164",
    password: "qwertyuiop",
  },
  {
    id: 47,
    firstName: "Christye",
    lastName: "Duddy",
    phoneNumber: "983-859-0954",
    password: "qwertyuiop",
  },
  {
    id: 48,
    firstName: "Jamison",
    lastName: "Ellis",
    phoneNumber: "850-534-0090",
    password: "qwertyuiop",
  },
  {
    id: 49,
    firstName: "Nathalia",
    lastName: "Standring",
    phoneNumber: "884-790-5298",
    password: "qwertyuiop",
  },
  {
    id: 50,
    firstName: "Edouard",
    lastName: "Elsley",
    phoneNumber: "943-739-1482",
    password: "qwertyuiop",
  },
];

const userList = userBaseList.map((user) => ({
  ...user,
}));

export class UserModelCrudDataRepository implements CrudDataRepository {
  create({ entity }: { entity: unknown }) {
    console.log(entity);

    //console.log("entity :", entity);
    throw new Error("Method not implemented.");
  }
  findById({ id }: { id: string | number }) {
    return userList.find((item) => item.id == id) ?? {};
  }
  async findPaginate({
    filter,
    search,
    sortBy,
    limit,
    page,
  }: PaginationOptions): Promise<Pagination<Record<string, unknown>>> {
    const limitValue = limit ?? 10;
    const start = ((page ?? 1) - 1) * limitValue;
    const end = start + limitValue;
    const items = userList.slice(start, end);
    return {
      items,
      limit: limitValue,
      itemCount: userList.length,
      pageCount: Math.ceil(userList.length / limitValue),
      page: page ?? 1,
      filter,
      search,
      sortBy,
    };
  }
  update({ entity, id }: { id: string | number; entity: unknown }) {
    console.log(entity, id);

    throw new Error("Method not implemented.");
  }
  delete({ id }: { id: string | number }) {
    console.log(id);

    throw new Error("Method not implemented.");
  }
}

@CinCrudModel({
  name: "user",
  path: "user",
  viewPageOptions: { enable: true },
  dataRepository: new UserModelCrudDataRepository(),
})
@CinExpose()
export class UserModel extends CinModel {
  @CinId()
  id: number | string;

  @CinSearchable()
  @CinExposeTranslate()
  @CinSortable()
  // @CinValidation(yup.string().required())
  @CinText()
  lastName!: string;

  @CinExcludeTranslate()
  @CinEmail()
  email?: string;

  @CinText()
  @CinLabel()
  @CinSearchable()
  firstName!: string;

  @CinPhoneNumber()
  phoneNumber: string;

  @CinPassword()
  password: string;
  // @CinTab({ label: "tab 1", priority: 1 })
  // @CinExclude([
  //   CrudActionsEnum.Index,
  //   CrudActionsEnum.View,
  //   CrudActionsEnum.Update,
  // ])
  //   @CinEnum(UserStatus)
  //   status?: UserStatus;
}
