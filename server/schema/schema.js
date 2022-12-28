


const Car = require('../models/Cars');



const { GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLSchema,
    GraphQLList,
} = require('graphql');

// Car Type
const CarType = new GraphQLObjectType({
    name: 'Car',
    fields: () => ({
        id: { type: GraphQLID },
        Brand_name: { type: GraphQLString },
        IPR: { type: GraphQLString },
        Designation: { type: GraphQLString },
        Status: { type: GraphQLString },
        Number: { type: GraphQLString },
        Office: { type: GraphQLString },
        Nice_classification: { type: GraphQLString },
        Owner: { type: GraphQLString },
    })
});



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        car: {
            type: CarType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Car.findById(args.id);
            }
        },
        cars: {
            type: new GraphQLList(CarType),
            resolve(parent, args) {
                return Car.find({});
            }
    }
    }
});
//mutation
const mutation = new GraphQLObjectType({
    name: 'mutation',

    fields: {
        addCar: {
            type: CarType,
            args: {
                Brand_name: { type: GraphQLString },
                IPR: { type: GraphQLString },
                Designation: { type: GraphQLString },
                Status: { type: GraphQLString },
                Number: { type: GraphQLString },
                Office: { type: GraphQLString },
                Nice_classification: { type: GraphQLString },
                Owner: { type: GraphQLString },
            },
            resolve(parent, args) {
                let car = new Car({
                    Brand_name: args.Brand_name,
                    IPR: args.IPR,
                    Designation: args.Designation,
                    Status: args.Status,
                    Number: args.Number,
                    Office: args.Office,
                    Nice_classification: args.Nice_classification,
                    Owner: args.Owner,
                });
                return car.save();
            }
        },
        deleteCar: {
            type: CarType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Car.findByIdAndRemove(args.id);
            }
        },
        updateCar: {
            type: CarType,
            args: {
                id: { type: GraphQLID },
                Brand_name: { type: GraphQLString },
                IPR: { type: GraphQLString },
                Designation: { type: GraphQLString },
                Status: { type: GraphQLString },
                Number: { type: GraphQLString },
                Office: { type: GraphQLString },
                Nice_classification: { type: GraphQLString },
                Owner: { type: GraphQLString },
            },
            resolve(parent, args) {
                return Car.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            Brand_name: args.Brand_name,
                            IPR: args.IPR,
                            Designation: args.Designation,
                            Status: args.Status,
                            Number: args.Number,
                            Office: args.Office,
                            Nice_classification: args.Nice_classification,
                            Owner: args.Owner,
                        }
                    },
                    { new: true }
                );
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});
