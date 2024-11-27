var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Fetch and render projects
function fetchAndRenderProjects() {
    return __awaiter(this, void 0, void 0, function () {
        var response, projects, projectsContainer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('./src/data/projects.json')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        console.error("Failed to load projects: ".concat(response.status));
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    projects = _a.sent();
                    projectsContainer = document.getElementById('projects-grid');
                    if (!projectsContainer) {
                        console.error("Projects container not found!");
                        return [2 /*return*/];
                    }
                    // Render each project
                    projects.forEach(function (project) {
                        // Create project card
                        var projectCard = document.createElement('div');
                        projectCard.className = 'project-card';
                        // Add project title
                        var title = document.createElement('h2');
                        title.className = 'project-title';
                        title.textContent = project.title;
                        // Add project description
                        var description = document.createElement('p');
                        description.className = 'project-description';
                        description.textContent = project.description;
                        // Add project link
                        var link = document.createElement('a');
                        link.className = 'project-link';
                        link.href = project.url;
                        link.target = '_blank';
                        link.rel = 'noopener noreferrer';
                        link.textContent = project.type;
                        // Append elements to project card
                        projectCard.appendChild(title);
                        projectCard.appendChild(description);
                        projectCard.appendChild(link);
                        // Append project card to the container
                        projectsContainer.appendChild(projectCard);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
// Call the function on page load
window.onload = fetchAndRenderProjects;
