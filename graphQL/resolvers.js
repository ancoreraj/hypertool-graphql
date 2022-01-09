const Audit = require('./../models/Audit')

const resolvers = {
    Query: {
        getLogs: async (parent, args) => {
            try {
                let { page, size } = args

                if(!page) page = 1

                if(!size) size = 10 // default size of page

                const limit = parseInt(size)
                const skip = (page-1)*size

                const allAudit = await Audit.find({}).limit(limit).skip(skip)
                console.log(allAudit);
                return allAudit

            } catch (err) {
                console.log(err);
            }

        },
        getSingleLog: async (parent, args) => {
            try{
                const { id } = args

                const findLog = await Audit.findOne({id})

                return findLog

            }catch(err){
                console.log(err)
            }
        }
    },

    Mutation: {
        createLog: async (parent, args) => {
            try {
                console.log(args)
                const newAudit = new Audit({
                    severity: args.audit.severity,
                    component: args.audit.component,
                    context: args.audit.component,
                    message: args.audit.message,
                })
                newAudit.tags.push(args.audit.tag)

                newAudit.save();

                return newAudit
            } catch (err) {
                console.log(err);

            }
        }
    }

}

module.exports = { resolvers }