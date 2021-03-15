export default {
    extractHydraMember: (payload) => payload['hydra:member'],
    normalizeScenarioList: function (payload) {
        const scenarios = this.extractHydraMember(payload)
        /*for (let i = 0; i < scenarios.length; i++) {
            scenarios[i] = scenarios[i];
        }
        console.log(scenarios)
        */
        return scenarios;
    },/*
    normalizeScenario(scenario) {
        const normalized = {
            id: scenario.id,
            methodName: scenario.methodName,
            steps: {}
        }
        for (let i = 0; i < scenario.steps.length; i++) {
            console.log(scenario.steps[i])
            const step = scenario.steps[i]
            normalized.steps[step.position] = this.normalizeStep(step)
        }
        return normalized
    },
    normalizeStep(step) {
        const normalized = {
            position: step.position,
            arguments: {},
            action: step.action
        }
        for (let i = 0; i < step.arguments.length; i++) {
            normalized.arguments[]
        }
        console.log(step)
        return normalized
    },
    normalizeArgument(argument) {
        console.log(argument)
        const normalized = {}
    }
    */
}