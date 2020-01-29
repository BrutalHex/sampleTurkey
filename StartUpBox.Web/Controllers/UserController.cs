using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StartUpBox.Dto;
using StartUpBox.Framework.Data.Filter;
using StartUpBox.Framework.Dto;
using StartUpBox.ServiceContract;

namespace StartUpBox.Web.Controllers
{
    [Route("api/[controller]/{action}/{key?}")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<JsonResult> GetAll([FromBody]QueryInfo searchRequestInfo)
        {
            var result = await _userService.GetAll(searchRequestInfo);
            return new JsonResult(new
            {
                data = new { records = result.DataSource, count = result.Count },
                resultCode = 0
               
            });
        }

        [HttpGet]
        public   JsonResult Alive()
        {
            

            return new JsonResult(new
            {
                 Title="service is up",
                resultCode = 0
            });

        }
        [HttpGet]
        public async Task<JsonResult> GetAll()
        {
            var result = await _userService.GetAll();

            return new JsonResult(new
            {
                data = new { records = result, count = result.Count },
                resultCode = 0
            });

        }

        [HttpGet]
        public JsonResult Get(int key)
        {
            var result = _userService.GetById(key);

            return new JsonResult(new
            {
                data = new { records = result, count = 1 },
                resultCode = 0
            });
        }

        [HttpPost]
        public async Task<JsonResult> Add([FromBody]NewUser  model)
        {
            var result = await _userService.Add(model);
            return GenerateOutputResult(result);

        }

        [HttpPut]
        public async Task<JsonResult> Update([FromBody]EditUser  model)
        {
            var result = await _userService.Update(model);
            return GenerateOutputResult(result);

        }

        [HttpPost, ActionName("Delete")]
        public async Task<JsonResult> Delete(int key)
        {

            var result = await _userService.Delete(key);

            return GenerateOutputResult(result);
        }



        protected JsonResult GenerateOutputResult(ValiditionMessage validitionMessage)
        {
            if (validitionMessage.Success)
            {
                return new JsonResult(new { resultCode = 0, Success= validitionMessage.Success, data = validitionMessage.ResultData, Entity = validitionMessage.Entity, message =  validitionMessage.Message });
            }
            else
            {

                return new JsonResult(new { resultCode = 1, Success = validitionMessage.Success, message = validitionMessage.Message, Entity = validitionMessage.Entity });

            }
        }
    }
}